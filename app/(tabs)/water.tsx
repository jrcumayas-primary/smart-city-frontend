import { Text, View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { LineChart } from 'react-native-chart-kit';

const chartData = {
    datasets: [
        {  
            data: [20, 45, 28, 80, 99],
            strokeWidth: 2,
            color: () => 'blue', 
        },
    ]
};

export default function Water() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>WATER CONSUMPTION STATISTICS</Text>
            <LineChart
                data={chartData}
                chartConfig={chartConfig}
                withDots={false}
                width={width * 0.9}
                height={height * 0.3}
                style={styles.chart}
            />
            <View style={styles.grid}>
                {[
                  { label: "Data A", value: "200.12" },
                  { label: "Data B", value: "31.12" },
                  { label: "Data C", value: "132.62" },
                  { label: "Data D", value: "140.153" },
                ].map((item, index) => (
                  <View key={index} style={styles.card}>
                    <Text style={styles.cardLabel}>{item.label}</Text>
                    <Text style={styles.cardValue}>{item.value}</Text>
                  </View>
                ))}
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
        r: "1",
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
        color: "gray"
    },
    cardValue: {
        fontSize: width * 0.08,
        fontWeight: 700,
        color: "gray",
        marginTop: "0.5cm"
    }
})