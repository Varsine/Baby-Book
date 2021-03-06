import React from "react"
import Popup from "./Popup"
import xorvirap from "./Image/xorvirap.jpg"
import garni from "./Image/garni.jpg"
import haxpat from "./Image/haxpat.jpg"
import jermuk from "./Image/jermuk.jpg"
import noravanq from "./Image/noravanq.jpg"
import tatev from "./Image/tatev.jpg"
import dilijan from "./Image/dilijan.jpg"
import sevan from "./Image/sevan.jpg"

class ThreePage extends React.Component {
  state = {
    places: [
      {
        id: 0,
        name: "Խոր Վիրապ",
        info:
          "Վիրապը օձերով, թունավոր միջատներով լի մի խոր փոս էր, ուր գցում էին դատապարտյալին։ Տրդատ 3-րդ Մեծը քրիստոնյաների հալածանքի շրջանում Գրիգոր Լուսավորչին նետել է Արտաշատի արքունական բանտի գուբը, որտեղ Լուսավորիչն անցկացրել է մոտ 14 տարի։ Լուսավորիչը Խոր վիրապից դուրս գալուց հետո ստանալով արքայի աջակցությունը, քրիստոնեությունը դարձնում է իբրև պետական կրոն։",
        src: xorvirap
      },
      {
        id: 1,
        name: "Գառնի",
        info:
          "Գառնու հեթանոսական տաճար Կոտայքի մարզի Գառնի գյուղում է, Ազատ գետի աջ ափին։ Գառնին հիմնադրել է Հայկ նահապետի ծոռ Գեղամը, իր թոռան՝ Գառնիկի անունով։ Ենթադրվում է, որ տաճարը նվիրված է եղել արևի աստված Արեգ-Միհրին։",
        src: garni
      },
      {
        id: 2,
        name: "Նորավանք",
        info:
          "Նորավանք հայ առաքելական վանական համալիր է: Գտնվում է Հայաստանի Հանրապետության Վայոց ձորի մարզում, արդեն վաղ միջնադարից հանդիսացել է սրբատեղի։ Նորավանքը հիմնադրել է Վահանավանքի վանահայր Հովհաննես եպիսկոպոսը, ով 1105 թվականին։",
        src: noravanq
      },
      {
        id: 3,
        name: "Սևան",
        info:
          "Սևանա լիճ, բարձրլեռնային քաղցրահամ խոշոր լիճ Հայաստանի Գեղարքունիքի մարզում` ծովի մակարդակից մոտ 1900 մետր բարձրության վրա։ Այն երկրագնդի քաղցրահամ ջուր ունեցող 2-րդ բարձրադիր լիճն է Հարավային Ամերիկայի Տիտիկակա լճից հետո։ Պատմական տարբեր ժամանակաշրջաններում լիճն ունեցել է տարբեր անուններ՝ Գեղարքունի, Գեղամա ծով, Դարյա-Շիրին, Լակնիտիս Գյոկչայ։ Լճի երկարությունը 70 կմ է, առավելագույն լայնությունը՝ 55 կմ։",
        src: sevan
      },
      {
        id: 4,
        name: "Տաթև",
        info:
          "Տաթևի վանք, միջնադարյան վանական համալիր Հայաստանում։ Գտնվում է Սյունիքի մարզի Տաթև գյուղի հարավում՝ Որոտան գետի վտակի ձորի աջափնյա եզերքին։ 1722-30 թվականներին Տաթևը եղել է Սյունիքի ազատագրական պայքարի, 1919-21 թվականներին՝ Զանգեզուրի ինքնապաշտպանության կարևոր օջախներից մեկը։ ",
        src: tatev
      },
      {
        id: 5,
        name: "Դիլիջան",
        info:
          "Դիլիջան, քաղաք Հայաստանի Տավուշի մարզում, Աղստև գետի ափին։ Դիլիջանի տարածքում կան 2 տասնյակ հանքային աղբյուրներ։ Հայաստանում առաջին առողջարանը հիմնադրվել է Դիլիջանում 1921 թ.։ 1958 թ.-ին քաղաքի մոտակայքում տարածվող անտառահատվածում ստեղծվել է հանրապետության արգելանոցներից մեկը՝ Դիլիջանի արգելանոցը:",
        src: dilijan
      },
      {
        id: 6,
        name: "Ջերմուկ",
        info:
          "Ջերմուկի ջրվեժ բնության ջրաերկրաբանական հուշարձան է Հայաստանի Վայոց ձորի մարզում՝ Ջերմուկ քաղաքում՝ Արփա գետի աջակողմյան Ջերմուկ վտակի վրա։ Սկզբնավորվում է աղբյուրներից, մոտ 68 մ բարձրությունից 3 գմբեթաձև դարավանդներով թափվում Արփա գետ։",
        src: jermuk
      },
      {
        id: 7,
        name: "Հախպատ",
        info:
          "Հաղբատի վանքը միջնադարյան Հայաստանի հոգևոր, մշակութային և գիտաուսումնական խոշոր կենտրոն է: Գտնվում է Հայաստանի Լոռու մարզի Հաղպատ գյուղում: Սանահինի վանքային համալիրի հետ միասին հանդիսանում է ՅՈՒՆԵՍԿՕ-ի համաշխարհային ժառանգության օբյեկտ։",
        src: haxpat
      }
    ],
    showPopup: false,
    popup: ""
  }
  togglePopup = id => {
    let modal
    let placeArr = this.state.places
    placeArr.filter((item, index, arr) => {
      if (id === index) {
        modal = (
          <Popup
            name={arr[index].name}
            info={arr[index].info}
            closePopup={() => this.togglePopup(arr[index].id)}
          />
        )
      }
    })
    this.setState({
      showPopup: !this.state.showPopup,
      popup: modal
    })
  }
  render() {
    let arr = this.state.places
    return (
      <div>
        <h1 className="page-title">
          <p>
            <em>Հայաստանի տեսարժան վայրերը</em>
          </p>
        </h1>
        <hr />
        <ul className="places">
          {this.state.places.map((place, index, arr) => (
            <li className="place-list" key={place.id}>
              <p>{place.name}</p>
              <img
                src={place.src}
                key={index}
                onClick={() => this.togglePopup(place.id)}
              />
              <div>{this.state.showPopup ? this.state.popup : null}</div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ThreePage
