// import React from 'react'
// import './../support/newsletter.css'
// import Cookie from 'unice'
// class NewsLetter extends React.Component{
//     state={closeTab:true,cooki : ''}
//     close = ()=>{
//         this.setState({closeTab:false})
//         Cookie.set('key' ,'value')
//         setTimeout(15menit , )
//     }
//     componentDidMount(){
//         const cookir = Cookie.get
//         if(cookir){
//             this.setState({cooki})
//             // setTimeout( , this.setState({cooki : ''}))
//         }
//     }
//     render(){
//         return(
//             this.state.closeTab && this.state.cooki == ''?
//             <div className="newsletterContainer animated fadeInUp delay-3s">
//                 <input type="button" className="closeBtn" onClick={this.close} value="x"/>
//                 <h2>Get latest updates in web technologies</h2>
//                 <p>I write articles related to web technologies, such as design trends, development
//                 tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
//                 them all.
//                 </p>
//             <div className="row">
//                 <div className="col-12 col-md-8">
//                     <input type="text" className="textCermati"></input>
//                 </div>
//                 <div className="col-12 col-md-4 pb-3">
//                     <input type="button" className="btnCermati" value="Count Me In!"></input>
//                 </div>
//             </div>
//             </div>:null
//         )
//     }
// }

// export default NewsLetter;

var t = 1561109724539 - new Date().getTime()

console.log(new Date().getTime() + (15*1000))
console.log(t)

setTimeout(() => console.log('trigered') , 1000)