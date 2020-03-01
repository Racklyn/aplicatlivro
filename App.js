import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textCenter}>AplicatLivro</Text>
      </View>

      <View style={styles.main}>
        <ScrollView style={styles.scroll}>
          <Card
            ImgSource={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/514GbfM-F4L._SX347_BO1,204,203,200_.jpg',
            }}
            titulo="titulo1"
            descricao="descrição 1"
          />
          <Card
            ImgSource={{
              uri:
                'https://i.pinimg.com/originals/4f/09/d5/4f09d5c585b74c92781d9adeb47736a0.jpg',
            }}
            titulo="titulo2"
            descricao="Segunda descrição onde está falando um monde de coisa. Blábláblá!"
          />
          <Card
            ImgSource={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/41vtCX7HX5L._SX334_BO1,204,203,200_.jpg',
            }}
            titulo="3° Título"
            descricao="descrição do terceiro livro"
          />
          <Card
            ImgSource={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/61hH5E8xHZL.jpg',
            }}
            titulo="3° Título"
            descricao="descrição do terceiro livro"
          />
          <Card
            ImgSource={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/91JqMpkJkVL.jpg',
            }}
            titulo="3° Título"
            descricao="descrição do terceiro livro"
          />
          <Card
            ImgSource={{
              uri:
                'https://lojasaraiva.vteximg.com.br/arquivos/ids/12101382/1009410142.jpg?v=637142219587830000',
            }}
            titulo="3° Título"
            descricao="descrição do terceiro livro"
          />
          <Card
            ImgSource={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/81iX8dstckL.jpg',
            }}
            titulo="3° Título"
            descricao="descrição do terceiro livro"
          />
          <Card
            ImgSource={{
              uri:
                'https://img.travessa.com.br/livro/BA/a8/a89d2c52-4688-47df-838e-ae26c19f2764.jpg',
            }}
            titulo="Hary Potter"
            descricao="descrição do terceiro livro"
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
    backgroundColor: '#7503A6',
    alignContent: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 5,
    backgroundColor: '#2E0259',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
    color: '#CCC',
    fontSize: 40,
    padding: 0,
  },
  scroll: {
    flex: 1,
    width: Dimensions.get('window').width,
    //backgroundColor: 'red',
    //alignItems: 'center',
  },
  card: {
    width: Dimensions.get('window').width - 20,
    height: 200,
    backgroundColor: '#0477BF',
    marginVertical: 5,
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  cardImgContent: {
    flex: 1,
    backgroundColor: '#3334',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDescContent: {
    flex: 1,
    alignItems: 'center',
  },
  cardDescTitle: {
    backgroundColor: '#3703A6',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  cardDesc: {
    textAlign: 'justify',
    padding: 3,
  },
});

class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.cardImgContent}>
          <Image
            style={{ width: 150, height: 200, resizeMode: 'contain' }}
            source={this.props.ImgSource}
          />
        </View>

        <View style={styles.cardDescContent}>
          <Text style={styles.cardDescTitle}>{this.props.titulo}</Text>
          <Text style={styles.cardDesc}>{this.props.descricao}</Text>
        </View>
      </View>
    );
  }
}
