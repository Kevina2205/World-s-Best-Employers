import "./../style.css"

export default function SecondPage() {
  return (
      <>
         <h1 className="title">The Great Resignation</h1>

          <div className="main">
            <img src="./../resign.png" alt="resign" width={500}/>

            <p className="resignParagraph">Since the end of 2020, a large number of employees voluntarily resigned from their jobs. Many workers resign because they feel unappreciated and do not get a salary that is in accordance with the responsibilities and burdens they have to bear. Also, some workers resign because there is no opportunity to advance in their company. However, not a few employees feel at home because their workplace has a good meritocracy, reasonable salary, better benefits, and opportunities for advancement and work-life balance. </p>

            
          </div>
      </>
    
  );
}