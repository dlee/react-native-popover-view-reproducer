import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Popover from "react-native-popover-view";
import { useState } from "react";
import { Mode } from "react-native-popover-view/dist/Types";

export default function HomeScreen() {
  const [showPopover, setShowPopover] = useState(false);
  const [showRNModal, setShowRNModal] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={[]}>
      <View style={styles.content}>
        <Pressable style={styles.button} onPress={() => router.push("/modal")}>
          <Text style={styles.buttonText}>Expo Router Modal</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.rnModalButton]}
          onPress={() => setShowRNModal(true)}
        >
          <Text style={styles.buttonText}>React Native Modal</Text>
        </Pressable>

        <Popover
          isVisible={showPopover}
          onRequestClose={() => setShowPopover(false)}
          backgroundStyle={{ backgroundColor: "purple" }}
          mode={Mode.RN_MODAL}
          debug
          from={
            <Pressable
              style={[styles.button, styles.popoverButton]}
              onPress={() => setShowPopover(true)}
            >
              <Text style={styles.buttonText}>Popover View</Text>
            </Pressable>
          }
        >
          <View style={styles.popoverContent}>
            <Text style={styles.popoverText}>This is a popover!</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setShowPopover(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </Popover>

        <Modal
          visible={showRNModal}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setShowRNModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>React Native Modal</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setShowRNModal(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8b6b6b",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  popoverButton: {
    marginTop: 20,
  },
  rnModalButton: {
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 200,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    color: "black",
    fontWeight: "bold",
  },
  popoverContent: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
  },
  popoverText: {
    fontSize: 16,
    marginBottom: 15,
    color: "black",
  },
  closeButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
});
