import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF", "#FF6666", "#00CED1"];


export default function Dashboard() {

    const [sentiments, setSentiments] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
   //const journals = JSON.parse(localStorage.getItem('journals'));

    useEffect(() => {
        const getSentiments = async () => {
            //console.log(user);
            try {
                const res = await axios.get(`http://localhost:8080/${user.userName}/journals`);
                const journals = res.data;

                const cached = JSON.parse(localStorage.getItem("journals")) || {};
                const jourEm = {...cached};
                const sentiments = await Promise.all(
                   
                    journals.map(async (entry, idx) => {

                        // if(localStorage.getItem("journals")){
                        //     const checker = JSON.parse(localStorage.getItem("journals"));
                        //     if(checker.some(e => e.journalId === entry.journalId)){
                        //         const {emotion, sentiment, explanation} = checker[entry.journalId];
                        //         return {
                        //             name: `Entry ${idx + 1}`,
                        //             emotion,
                        //             sentiment,
                        //             explanation
                        //         };
                        //     }
                            
                        // }

                        const cachedEntry = jourEm[entry.journalId];

                        if (cachedEntry) {
                            return {
                                name: `Entry ${idx + 1}`,
                                emotion: cachedEntry.emotion,
                                sentiment: cachedEntry.sentiment,
                                explanation: cachedEntry.explanation
                            };
                        }

                        else{
                        

                        try {

                        
                            const res1 = await axios.post(`http://localhost:8080/sentiment`, entry);
                            console.log(res1.data);

                            const { sentiment, emotion, explanation } = res1.data;
                            // {sentiment=[neutral, none, The entry is a greeting and lacks emotional content.]}
                            // if(!jourEm[entry.journalId]){
                            //     jourEm[entry.journalId] = {};
                            // }
                            jourEm[entry.journalId] = {sentiment, emotion, explanation}; 

                            return {
                                name: `Entry ${idx + 1}`,
                                emotion,
                                sentiment,
                                explanation
                            };

                        
                            
                        } catch (err) {
                            console.error("Sentiment error:", err);
                            return {
                                name: `Entry ${idx + 1}`,
                                emotion: "Error",
                                sentiment: "Error",
                                explanation: "Couldn't analyze"
                            };
                        }
                        
                    }
                    }),
                    
                )
                localStorage.setItem("journals", JSON.stringify(jourEm));

                setSentiments(sentiments);
                //console.log(res1.data);
            } catch (err) {
                console.log("hi it failed", err);
            }
        };

        if (user?.userName) {
            getSentiments();
        }
    }, []);

    const sentimentFrequency = sentiments.reduce((acc, cur) => {
        if (cur.sentiment && cur.sentiment !== "Error") {
            acc[cur.sentiment] = (acc[cur.sentiment] || 0) + 1;
        }
        return acc;
    }, {});

    const emotionFrequency = sentiments.reduce((acc, cur) => {
        if (cur.emotion && cur.emotion !== "Error") {
            acc[cur.emotion] = (acc[cur.emotion] || 0) + 1;
        }
        return acc;
    }, {});

    const sentimentChartData = Object.entries(sentimentFrequency).map(([sentiment, count]) => ({
        sentiment,
        count
    }));

    const emotionChartData = Object.entries(emotionFrequency).map(([emotion, count]) => ({
        emotion,
        count
    }));

    const toolTipData = sentiments.reduce((acc, cur) => {
        if (cur.emotion && cur.explanation !== "Couldn't analyze") {
            if (!acc[cur.emotion]) {
                acc[cur.emotion] = []
            }
            acc[cur.emotion].push(cur.explanation);
        }

        return acc;
    }, {});

    return (
        <div style={{ padding: "40px", display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr" }}>
            <div style={cardStyle}>
                <h3 style={titleStyle}>Sentiment Overview</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sentimentChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="sentiment" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#8884d8" name="Number of Entries" />
                    </BarChart>
                    {/* <PieChart data={emotionChartData}>
                    <Pie data={emotionChartData} dataKey="count" nameKey="emotion" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Tooltip />
                </PieChart> */}
                </ResponsiveContainer>
            </div>
            <div style={cardStyle}>
                <h3 style={titleStyle}>Emotions Overview</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={emotionChartData}
                            dataKey="count"
                            nameKey="emotion"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={({ name, percent }) =>
                                `${name} ${(percent * 100).toFixed(0)}%`
                            }
                        >
                            {emotionChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const { emotion, count } = payload[0].payload;
                                    const explanations = toolTipData[emotion];

                                    return (
                                        <div style={{ background: "#fff", border: "1px solid #ccc", padding: "10px", maxWidth: "300px" }}>
                                            <p><strong>Emotion:</strong> {emotion}</p>
                                            <p><strong>Count:</strong> {count}</p>
                                            {explanations && explanations.length > 0 && (
                                                <div>
                                                    <strong>Explanations:</strong>
                                                    <ul style={{ paddingLeft: "20px" }}>
                                                        {explanations.map((exp, idx) => (
                                                            <li key={idx}>{exp}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
}

const cardStyle = {
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
};

const titleStyle = {
    textAlign: "center",
    marginBottom: "10px",
    color: "#333"
};