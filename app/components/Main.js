// Include React
var React = require("react");
var Search = require("search");
var Student = require("student");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h1><strong>Github Project Viewer</strong></h1>
          <hr/>
          <div className="row">
                              <div className="col-lg-12">
                                   <div className="panel panel-default">
                                        <div className="panel-heading">
                                             <h3 className="panel-title text-center">Filter Students</h3>
                                        </div>
                                        <div className="panel-body">
                                        </div>
                                   </div>
                              </div>
					</div>
        </div>
        // Student component
        <div class="card">
          <img class="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">Student Name</h4>
            <a href="#" class="btn btn-primary">Followers</a>
            <a href="#" class="btn btn-primary">Repo</a>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
