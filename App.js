import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';
import React, {useState} from 'react';


const Board = () => {
  const[board, setBoard]= useState(Array(5).fill(Array(5).fill({value: 0, isBomb: false, isRevealed: false})));
  const[rowPoints, setRowPoints]= useState([0, 0, 0, 0, 0]);
  const[colPoints, setColPoints]= useState([0, 0, 0, 0, 0]);
  const[rowBombs, setRowBombs]= useState([0, 0, 0, 0, 0]);
  const[colBombs, setColBombs]= useState([0, 0, 0, 0, 0]);

  const handleCellPress = (row, col) => {
    // Handle lógico para pressionar a célula e mostrar o seu valor
  };

  const handleInputChange = (type, index, value) => {
    // Handle lógico para input de mudanças nos valores de pontos e/ou bombas.
  };

  const solveBoard = () => {
    //Algoritmo resolvedor do tabuleiro para identificar células seguras, bombas, e pontos mais altos
  };

  return (
    <View style={style.container}>
      <View style={style.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={style.row}>
            <TextInput
              style={style.input}
              value={rowPoints[rowIndex].toString()}
              onChangeText={(value) => handleInputChange('rowPoints', rowIndex, value)}
            />
            {row.map((cell, colIndex) => (
              <TouchableOpacity key={colIndex} style={style.cell} onPress={() => handleCellPress(rowIndex, colIndex)}>
                <Text>{cell.isRevealed ? (cell.isBomb ? '💣' : cell.value) : '?'}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={style.colInputs}>
          {colPoints.map((value, colIndex) => (
            <TextInput
              key={colIndex}
              style={style.input}
              value={value.toString()}
              onChangeText={(value) => handleInputChange('colPoints', colIndex, value)}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={style.button} onPress={solveBoard}>
        <Text>Solve</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
  },
  colInputs: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  }
});

export default Board;