import "./../style.css"

export default function FirstPage() {
  return (
      <>
        <body>
          <div className="maincontent">
            <div className="text">
            <h3 className="maintitle">WHO IS <br></br> THE BEST EMPLOYERS <br></br> IN THE WORLD?</h3>
            </div>
          <img className="company" src="./../company.jpg" alt="company" width={300} height={300}/>
          </div>
        </body>
      </>
    
  );
}