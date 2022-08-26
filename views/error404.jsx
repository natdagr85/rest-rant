const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <img className="pic" src="/images/sad-dog.jpg" alt="Sad Dog" />
        <div>
          Photo by <a href="https://unsplash.com/@fattycorgi">fattycorgi</a> on{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </div>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Def>
  );
}

module.exports = error404;
