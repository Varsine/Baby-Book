import React from "react"

class FourPage extends React.Component {
  state = {
    name: "",
    color: "",
    age: "",
    data: "",
    puzzles: [
      {
        id: 1,
        puzzle: `Ծնվում է ու մեծանում,
Հենց նույն օրն էլ մահանում,
        Հետո նորից կյանք առած
Պայծառ շորեր է հագնում:`,
        answer: "արև"
      },
      {
        id: 2,
        puzzle: `Հողն է մտնում, մահանում,
Հետո նորից կյանք առնում,
Աչքը հառած երկնքին,
Տարածվում է, շատանում:`,
        answer: "ցորեն"
      },
      {
        id: 3,
        puzzle: `Չորս ոտք ունի, բայց շուն չի,
Զու է ածում, թռչուն չի,
Խոտ է ուտում կովի պես,
Պատյան ունի, բայց տուն չի:`,
        answer: "կրիա"
      },
      {
        id: 4,
        puzzle: `Մի օձ կա մեծ, գույնը կապույտ,
Հա գնում է պտույտ-պտույտ,
Նրանով են սնվում անվերջ
Ծառ ու ծաղիկ, խոտ ու առվույտ:`,
        answer: "գետ"
      },
      {
        id: 5,
        puzzle: `Մի տախտակ կա քառանկյուն,
Առանց դրա չկա տուն,
Մինչև ամուր չփակես
Դու չես մտնի հանգիստ քուն:`,
        answer: "դուռ"
      },
      {
        id: 6,
        puzzle: `Խոսում է նա, լեզու չունի,
Շրջում է նա, ոտքեր չունի,
Բայց մտնում է ամեն մի տուն,
Ուրախ լուրեր բերում մարդուն:`,
        answer: "նամակ"
      },
      {
        id: 7,
        puzzle: `Կանգնած են երկու տուն՝ աղքատ և հարուստ։ Տները այրվում են։ 
      Ո՞ր տունը առաջինը կհանգցնի ոստիկանությունը։`,
        answer: "Ոստիկանները հրդեհ չեն հանգցնում, դա անում են հրշեջները"
      },
      {
        id: 8,
        puzzle: `Ո՞ր կենդանու վրայով են քայլում մարդիկ և անցնում մեքենաներ։

`,
        answer: "Զեբր"
      },
      {
        id: 8,
        puzzle: ` Դա մարդուն երեք անգամ է տրվում.
       առաջին երկու անգամն անվճար, 
       իսկ երրրոդի համար հարկավոր է վճարել:`,
        answer: "Ատամներ"
      },
      {
        id: 9,
        puzzle: `Ես կարող եմ ձեզ ստիպել արտասվել և ժպտալ, 
      կենդանացնել մահացածին և շրջել ժամանակը։`,
        answer: "Հիշողություն"
      },
      {
        id: 10,
        puzzle: `Այն, ինչ որևէ մեկը չի տեսել, երբեք չի եղել, բայց հաստատ կլինի։`,
        answer: "Վաղը"
      },
      {
        id: 11,
        puzzle: ` Ի՞նչ կարող եք բռնել ձախ ձեռքով, բայց չեք կարող աջով։`,
        answer: "Ձեր աջ ձեռքը"
      }
    ],
    question: "",
    answer: ""
  }
  changeName = e => {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }
  changeColor = e => {
    e.preventDefault()
    this.setState({
      color: e.target.value
    })
  }
  changeAge = e => {
    e.preventDefault()
    this.setState({
      age: e.target.value
    })
  }

  handlerSubmit = e => {
    e.preventDefault()
    let puzzles = this.state.puzzles
    let color = this.state.color
    let age = this.state.age
    let ques = ""

    if (age < 18 && color === "կարմիր") {
      ques = puzzles[0].puzzle
    } else if (age < 18 && color === "դեղին") {
      ques = puzzles[1].puzzle
    } else if (age < 18 && color === "կանաչ") {
      ques = puzzles[2].puzzle
    } else if (age < 18 && color === "կապույտ") {
      ques = puzzles[3].puzzle
    } else if (age < 18 && color === "սև") {
      ques = puzzles[4].puzzle
    } else if (age > 18 && color === "կարմիր") {
      ques = puzzles[6].puzzle
    } else if (age > 18 && color === "դեղին") {
      ques = puzzles[7].puzzle
    } else if (age > 18 && color === "կանաչ") {
      ques = puzzles[8].puzzle
    } else if (age > 18 && color === "կապույտ") {
      ques = puzzles[9].puzzle
    } else if (age > 18 && color === "սև") {
      ques = puzzles[10].puzzle
    } else {
      ques = puzzles[5].puzzle
    }
    this.setState({
      data: `Հարգելի ${this.state.name} համակարգիչը ձեր համար ընտրել է հետևյալ հանելուկը:`,
      question: ques,
      name: "",
      color: "",
      age: ""
    })
  }

  handlerAnswer = () => {
    this.state.puzzles.map((item, index, arr) => {
      if (this.state.question === arr[index].puzzle) {
        alert(`Ճիշտ պատացխանը - ${arr[index].answer}`)
      }
    })
  }
  render() {
    return (
      <div>
        <h1 className="four-title">Գուշակիր քեզ համար գրված հանելուկը</h1>
        <hr />
        <form className="pazzle-form" onSubmit={this.handlerSubmit}>
          <h1>Լրացրեք դաշտերը</h1>
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeName}
            placeholder="Անուն"
            required
          />
          <input
            type="text"
            value={this.state.color}
            onChange={this.changeColor}
            placeholder="Սիրելի գույնը"
            required
          />
          <input
            type="number"
            value={this.state.age}
            onChange={this.changeAge}
            required
            placeholder="Տարիք"
          />
          <input id="pazzle-submit" type="submit" />
          <p>{this.state.data}</p>
          <div className="question-pazzle">{this.state.question} </div>
          {this.state.question ? (
            <button className="answer-puzzel" onClick={this.handlerAnswer}>
              Պատասխան
            </button>
          ) : null}
        </form>
      </div>
    )
  }
}

export default FourPage
