import { StyleSheet } from "react-native";

export const TaskItemStyles = StyleSheet.create({
  cardbox: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "#31364D",
    padding: 20,
    borderRadius: 6,
    justifyContent: "space-between",
  },

  carText: {
    color: "#fff",
    fontSize: 14,
    flex: 1,
  },

  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },

  editButton: {
    width: 35,
    height: 35,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#8BB8E8",
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButton: {
    width: 35,
    height: 35,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FF7070",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: 15,
    height:15,
    resizeMode: "contain",
  },
});