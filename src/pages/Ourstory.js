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
      <section
        className={this.state.mode + ' content'}
        ref={section => {
          this.Ourstory = section
        }}
      >
        <Header title={this.state.mode} />
        <div className="wrapper">
          <div className="text">
            智軒Perry與璿Sherry的緣分，經由親友的介紹，於2017年6月10日開始通訊。最初我們僅使用Facebook
            messenger偶爾向對方寒暄幾句，因為我們都有各自忙碌的生活，一方面Sherry在台灣工作，而Perry也居住在溫哥華，我們因為時差關係也鮮少有交集。
            從Perry的記憶當中，在2017年7月底，他在工作上遭遇挫折，開始與Sherry分享自己的生活與感受，過程中Sherry傳送她所錄製的語音信息給Perry，適時的給予他鼓勵與打氣，Perry開始感受到Sherry的關心，兩人頻繁地傳送語音對話和視訊進行聊天，Perry每次都會在Sherry工作時感受到Sherry耐心地對待病人，孩子們喜歡她，老人們也喜歡她，也因為她的善良和慷慨，且具有想法及自主的個性，從中Perry也默默地對Sherry產生情愫，並進行追求。
            從2017年底開始，Perry與Sherry正式展開一段遠距離的戀愛。
            2018年2月底，Sherry趁著假期飛往溫哥華旅行，而這是Perry與Sherry第一次正式見面，期間Perry對Sherry照顧有加，為她安排歡迎會及一系列溫哥華的行程，雖然這只有為期12天的旅程，但這時間Perry與Sherry相處非常愉快，使Perry與Sherry的感情更見滋長。
            Sherry回到台灣後，因為在學業上遭遇挫折，Perry在這期間一直給予Sherry支持與鼓勵，並且幫助她走過那段低潮期，因為這些事情讓Sherry感受到Perry對她細心的付出與關懷，而在2018年7月，下了一個非常重要的決定，就是離開台灣，到異地重新展開一段人生的新旅程。
            踏上溫哥華開始新生活，也因為長時間的相處，Perry認知到Sherry是一位非常勤奮的人，她在同一時間念書和適應新環境，無論她有多疲累及忙碌，她總是在課前和課後進行預習和複習。Perry認為Sherry是他生命中的Miss
            Right，能夠出現在他的生命中，Perry也給了Sherry一個新的人生課程，雖說Sherry正在經歷文化衝擊影響，但Perry一直非常支持與幫助Sherry，讓她在每個難關中都能夠順利通過，也使得Sherry在溫哥華的新生活變得更有自信。
            因為有了這些共同經歷，
            我們互相認為可以成為彼此的生活伴侶，而且都喜歡對方的體貼與信任，於2019年3月17日Perry向Sherry求婚，在好友面前許下承諾，Sherry也願意與Perry攜手共同創造一個美好未來，並且希望讓更多的親朋好友見證Perry與Sherry的幸福人生。
          </div>
          <img src={require('../img/web-wedding-about_hear_temp.png')} alt="" />
        </div>
      </section>
    )
  }
}

export default Ourstory
