import React, { Component } from 'react'
import Header from '../components/Header'

class Ourstory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'ourstory',
    }
  }
  render() {
    return (
      <section className={this.state.mode + ' content'}>
        <Header title={this.state.mode} image={require('../img/_DSC0567-Edit.jpg')} />
        <div className="wrapper">
          <div className="text cn">
            智軒Perry與璿Sherry的緣分，經由親友的介紹，於2017年6月10日開始通訊。最初我們僅使用Facebook
            messenger偶爾向對方寒暄幾句，因為我們都有各自忙碌的生活，一方面Sherry在台灣工作，而Perry也居住在溫哥華，我們因為時差關係也鮮少有交集。
            從Perry的記憶當中，在2017年7月底，他在工作上遭遇挫折，開始與Sherry分享自己的生活與感受，過程中Sherry傳送她所錄製的語音信息給Perry，適時的給予他鼓勵與打氣，Perry開始感受到Sherry的關心，兩人頻繁地傳送語音對話和視訊進行聊天，Perry每次都會在Sherry工作時感受到Sherry耐心地對待病人，孩子們喜歡她，老人們也喜歡她，也因為她的善良和慷慨，且具有想法及自主的個性，從中Perry也默默地對Sherry產生情愫，並進行追求。
            從2017年底開始，Perry與Sherry正式展開一段遠距離的戀愛。
          </div>
          <img src={require('../img/web-wedding-about_hear_temp.png')} alt="" />
        </div>
      </section>
    )
  }
}

export default Ourstory
