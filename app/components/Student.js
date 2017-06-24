// Include React
var React = require("react");

var Student = React.createClass({
  render: function() {
    return (
      <div class="card">
        <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">Student Name</h4>
          <a href="#" class="btn btn-primary">Followers</a>
          <a href="#" class="btn btn-primary">Repo</a>
        </div>
      </div>
    );
  }
});

module.exports = student;
