import "./../style.css"
import Chart from "./chart";

export default function FourthPage() {
  return (
      <>
        <body>
          <h1 className="title">THE TOP 10 BEST EMPLOYERS IN THE WORLD</h1>

          <div className="fourth">
            <div>
              <p> Based on Forbes researched by surveying 150.000 full-time and part-time workers who worked in multinational corporations from 57 countries, there are the top 10 best employers in the world. </p>

              <ol>
                <li>Samsung Electronics</li>
                <li>Microsoft</li>
                <li>IBM</li>
                <li>Alphabet</li>
                <li>Apple</li>
                <li>Delta Air Lines</li>
                <li>Costco Wholesale</li>
                <li>Adobe</li>
                <li>Southwest Airlines</li>
                <li>Dell Technologies</li>
              </ol>

              <p>Although these 10 companies are not the companies with the largest number of employees in the world, these companies have the best work environment.</p>
            </div>

            <div>
              <p className="pieTitle">the number of employees in the company</p>
              <Chart/>
            </div>


          </div>


        </body>
      </>
    
  );
}