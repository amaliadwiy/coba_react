import React, {useMemo, useState} from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import TinderCard from 'react-tinder-card';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '90%',
    maxWidth: 260,
    height: 300,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#fff',
  },
  buttons: {
    margin: 20,
    zIndex: -100,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
});

const db = [
  {
    name: 'Richard Hendricks',
    img: {uri: 'https://i.pravatar.cc/100?img=1'},
  },
  {
    name: 'Erlich Bachman',
    img: {uri: 'https://i.pravatar.cc/100?img=2'},
  },
  {
    name: 'Monica Hall',
    img: {uri: 'https://i.pravatar.cc/100?img=3'},
  },
  {
    name: 'Jared Dunn',
    img: {uri: 'https://i.pravatar.cc/100?img=4'},
  },
  {
    name: 'Dinesh Chugtai',
    img: {uri: 'https://i.pravatar.cc/100?img=5'},
  },
];

const alreadyRemoved: any[] = [];
let charactersState = db;

export default function DatingView({navigation}: any) {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map(() => React.createRef()),
    [],
  );

  function swiped(direction: any, nameToDelete: any) {
    console.log('removing: ' + nameToDelete + ' to the ' + direction);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  }

  function outOfFrame(name: any) {
    console.log(name + ' left the screen!');
    charactersState = charactersState.filter(
      character => character.name !== name,
    );
    setCharacters(charactersState);
  }

  function swipe(dir: any) {
    const cardsLeft = characters.filter(
      person => !alreadyRemoved.includes(person.name),
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
  }

  return (
    <>
      <Text>DatingView nya</Text>
      <Button
        onPress={() => navigation.navigate('SettingUser', {showLogout: false})}
        title="Go to Settinga"
      />

      <Button title="PopUp Modal Langganan" onPress={handleModal} />
      <Modal isVisible={isModalVisible} coverScreen={true}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal>

      <View style={styles.container}>
        <Text style={styles.header}>React Native Tinder Card</Text>
        <View style={styles.cardContainer}>
          {characters.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              key={character.name}
              onSwipe={dir => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}>
              <View style={styles.card}>
                <ImageBackground
                  style={styles.cardImage}
                  source={character.img}>
                  <Text style={styles.cardTitle}>{character.name}</Text>
                </ImageBackground>
              </View>
            </TinderCard>
          ))}
        </View>
        <View style={styles.buttons}>
          <Button onPress={() => swipe('left')} title="Swipe left!" />
          <Button onPress={() => swipe('right')} title="Swipe right!" />
          <Button onPress={() => swipe('up')} title="Swipe up!" />
        </View>
        {lastDirection ? (
          <Text style={styles.infoText} key={lastDirection}>
            You swiped {lastDirection}
          </Text>
        ) : (
          <Text style={styles.infoText}>
            Swipe a card or press a button to get started!
          </Text>
        )}
      </View>
    </>
  );
}
