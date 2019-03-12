<template>
<v-container grid-list-md text-xs-center>
  <v-layout row v-if="animes.length">
    <v-card v-for="(anime, i)  in animes" :key="`${i}`">
      <v-img
        :src="`${ (anime) ? anime.image : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png' }`"
      ></v-img>
    </v-card>
  </v-layout>

  <v-layout row v-if="!animes.length">
    
    <v-card v-for="i  in 6" :key="`${i}`">
      <v-img
        :src="'https://prodimage.images-bn.com/pimages/9781543289350_p0_v1_s550x406.jpg'"
        
      ></v-img>
    </v-card>
    No Data
  </v-layout>
</v-container>
</template>

<script>
  import axios from 'axios'

  const dummies = [{
    id: 1,
    image: 'https://iflix-images.akamaized.net/59d6f0bfe4b027befa17a6e4-1530606952863_s_200x300',
    description: 'In a diner called Yukihira in a small town, father Jouichirou and his son Souma still have cook-offs against each other. Souma planned to train his cooking skills in Yukimura Diner after he graduates from middle school, with the aim of surpassing his father. However, his father suddenly decides to close down the shop, and wanted him to take the entrance exam of the top culinary school in Japan, the Tootsuki Academy, the place where the best chefs are born, an elite school where only top 10% of students could graduate. Can Souma survive?',
  }, {
    id: 2,
    image: 'https://iflix-images.akamaized.net/59a3e4b3e4b065544604d3d0-1530522685624_s_200x300',
    description: 'Humans live in the world of Assiah, demons in Gehenna. The two dimensions are not meant to interfere with each other, but demons still possess creatures in Assiah in spite of this. The humans who can fight these demons are known as exorcists. Rin Okumura is a boy who bears the curse of being Satans illegitimate son. His foster father sacrificed himself to save him from demons. To avenge his foster fathers death as well as to prove himself, Rin decides to follow the path of an exorcist.',
  }, {
    id: 3,
    image: 'https://iflix-images.akamaized.net/59b0eb9de4b0f7295154081c-1530522705923_s_200x300',
    description: 'Shoyo HINATA, enchanted by volleyball, jumps at his first chance to participate in an official game. However, it becomes his last as he is utterly defeated by the genius player, KAGEYAMA, known as the “King of the Court”. HINATA vows revenge and with tireless practice tries out for Karasuno High School’s volleyball team. Who he unexpectedly sees there is KAGEYAMA…',
  }, {
    id: 4,
    image: 'https://iflix-images.akamaized.net/5a67fa6ae4b027befa18b44f-1532930948565_s_200x300',
    description: 'In an alternate world, a small percentage of children are able to manifest superpowers upon reaching puberty. Yū Otosaka, a boy who awakens the ability to temporarily possess others, hopes to use his power to live an easy going high school life. However, he is caught red-handed by the mysterious Nao Tomori and is forced to transfer to Hoshinoumi Academy, where he and the other student council members must help students with abilities and stop them getting found out.',
  }, {
    id: 5,
    image: 'https://iflix-images.akamaized.net/57da49b014b65175f4327aa4-1547624774534_s_200x300',
    description: 'Tatsumi, a young country boy sets off on a journey to the Imperial Capital to make a name for himself and to raise some money for his village. After being tricked of all his money and having to sleep on the streets, he meets a seemingly dangerous group of assassins known as Night Raid. This changes the course of everything because the once noble young boy bent on saving his village pledges allegiance to Night Raid with vengeance on his mind.',
  }, {
    id: 6,    
    image: 'https://iflix-images.akamaized.net/5a03b537e4b01e742c81a59d-1529894034043_s_200x300',
    description: 'Saitama is a hero who only became a hero for fun. After three years of “special” training, though, he’s become so strong that he’s practically invincible. In fact, he’s too strong—even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?',
  }]
  export default {
    name: 'AnimesCard',
    data () {
      return {
        animes: [],
        dummies: dummies,
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    },
    created () {
      axios
      .get('https://kitsu.io/api/edge/anime')
      .catch(error => {
        console.log(error);
      })
      .then(response => {
        console.log(response);
        this.animes = this.dummies;
        // this.animes = response.data.data;
        })
    }
  }
</script>

<style scoped>
  .v-card {
    width: 180px;
    margin: 0 10px;
  }
</style>