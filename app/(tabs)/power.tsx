import { Text, View, ScrollView, Dimensions, StyleSheet, Button } from "react-native";
import { LineChart } from 'react-native-chart-kit';
import React, { useEffect, useState } from "react";

const chartData = {
    datasets: [
        {  
            data: [20, 45, 28, 80, 99],
            strokeWidth: 2,
            color: () => 'red', 
        },
    ]
};

export default function Electricity() {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://homeassistant.local:8123/api/house?id=sensor.group_house_1");
            const json = await response.json();
            // Example: if your API returns an array of numbers for the chart
            setApiData(json["group_house_1"]); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const toggleSwitch = async () => {
        const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYzIxMDQwZjZiNDY0OWFhYTNkNzFlZjExNGFjZjNkNiIsImlhdCI6MTc0NTIyNjYyMywiZXhwIjoyMDYwNTg2NjIzfQ.Bju2mZd182guvnDyOlvNBp4KQCTLPeAQtg-eHiOZ3-4"
        try {
            const response = await fetch("http://homeassistant.local:8123/api/services/switch/toggle", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${access_token}`  // Replace this
                },
                body: JSON.stringify({
                    entity_id: "switch.smart_meter_ivap_switch"  // Replace with your actual entity
                })
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>POWER CONSUMPTION STATISTICS</Text>
            <LineChart
                data={chartData}
                chartConfig={chartConfig}
                withDots={false}
                width={width * 0.9}
                height={height * 0.3}
                style={styles.chart}
            />
            <View style={styles.grid}>
                {/*{[
                  { label: "Data A", value: "200.12" },
                  { label: "Data B", value: "31.12" },
                  { label: "Data C", value: "132.62" },
                  { label: "Data D", value: "140.153" },
                ].map((item, index) => (
                  <View key={index} style={styles.card}>
                    <Text style={styles.cardLabel}>{item.label}</Text>
                    <Text style={styles.cardValue}>{item.value}</Text>
                  </View>
                ))}*/}
            {  Array.isArray(apiData) && apiData.map((item, index) => (
                  <View key={index} style={styles.card}>
                    <Text style={styles.cardLabel}>{item.entity_id}</Text>
                    <Text style={styles.cardValue}>{item.state}</Text>
                  </View>
                ))}
            <Button
              onPress={fetchData}
              title="Fetch"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={toggleSwitch}
              title="Toggle"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            </View>
            
        </ScrollView>
    );
}

const { width, height } = Dimensions.get("window");

const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: () => 'black',
    labelColor: () => '#888',
    propsForDots: {
        r: "3",
        strokeWidth: "2",
        stroke: "black"
    }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 40
    },
    chart: {
        marginTop: "1cm",
        borderRadius: "0.3cm",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    header: {
        fontSize: width * 0.07,
        fontWeight: "bold",
        textAlign: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: 30,
        marginTop: "1cm"
    },
    card: {
        width: width* 0.4,
        height: height * 0.15,
        backgroundColor: "#ffffff",
        borderRadius: "0.3cm",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        alignItems: "center",
        padding: "0.2cm"
    },
    cardLabel: {
        fontWeight: 700,
        color: "gray",
        textAlign: "center",
    },
    cardValue: {
        fontSize: width * 0.08,
        fontWeight: 700,
        color: "gray",
        marginTop: "0.5cm"
    }
})