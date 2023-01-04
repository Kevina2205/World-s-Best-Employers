import "./../style.css"

export default function ThirdPage() {
  return (
      <>
        <body>
            <h1 className="title">great company is led by <br></br> even greater people</h1>

              <p className="companyParagraph">
                <br></br>
                Then, what are the characteristics of a great boss?<br></br>
                  The best bosses will allow their employees innovate even though they are totally different, also allow them to makes a mistake and learn from it. Thus, a great boss will trust, respect, and support people who work for him. A good boss is not a boss who is cruel and suppresses his subordinates, but a boss who treats his employees like human beings who have feelings. A great boss can inspire their employees to be the best versions of themselves.
                  </p>
                  <br></br>
                  <br></br>

                  <h2 className="quote">"They valued my opinion even though I was young. And that kind of thing motivates you to do better." <br></br> ~ Steven Rocci, lawyer and engineer.</h2>

              <img className="boss" src="./../bos.png" alt="boss" width={650}/>

            
        </body>
      </>
    
  );
}