import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

interface Props {
  title: string;
  date: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: "#fff",
    border: "3 solid #facc15",
  },

  heading: {
    textAlign: "center",
    fontSize: 30,
    color: "#0b2341",
    marginBottom: 20,
  },

  subHeading: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: 40,
  },

  name: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 20,
    color: "#0b2341",
  },

  body: {
    textAlign: "center",
    fontSize: 16,
    color: "#475569",
    lineHeight: 1.7,
    marginBottom: 50,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },

  signature: {
    textAlign: "center",
  },

  date: {
    textAlign: "center",
  },
});

export default function CertificatePDF({
  title,
  date,
}: Props) {
  return (
    <Document>

      <Page size="A4" orientation="landscape" style={styles.page}>

        <Text style={styles.heading}>
          Certificate of Achievement
        </Text>

        <Text style={styles.subHeading}>
          Certificate ID: EH-2026-0001
        </Text>

        <Text style={styles.name}>
          Piyush Gupta
        </Text>

        <Text style={styles.body}>
          This certificate is proudly presented for successfully
          completing the programme "{title}" and demonstrating
          exceptional skills and knowledge.
        </Text>

        <View style={styles.footer}>

          <View style={styles.signature}>
            <Text>Piyush Gupta</Text>
            <Text>Event Director</Text>
          </View>

          <View style={styles.date}>
            <Text>{date}</Text>
            <Text>Date Issued</Text>
          </View>

        </View>

      </Page>

    </Document>
  );
}