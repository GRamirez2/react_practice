var React = require("react");

var Form = require("./Movie/Form");

var helpers = require("../utils/helpers");

var RepoItem = React.createClass({
  render: function(){
    return (
      <li>{this.props.repo}</li>
    )
  }
})

var Movie = React.createClass({

getInitialState: function(){
    return { result: "" };
    },
   
handleSubmit: function(searchTerm){
    helpers.getMovieByName(searchTerm).then(function(data){
        this.setState({ result: data.data });
        console.log(this.state.result)
    }.bind(this));
},

render: function(){
  var repoArr = this.state.result;
  var repoNames = [];
  for (var i in repoArr){
    repoNames[i] = repoArr[i].name
  }
  console.log(repoArr)//this bitch is empty
  console.log(repoNames)//this bitch is empty
  var mappedRepos = repoNames.map(function(repo){
    return <RepoItem repo={repo}/>
  })
    return (
     <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title text-center">Movie Search</h3>
            </div>
            <div className="panel-body">
              <Form submit={this.handleSubmit}/>
              <h2>{this.state.result.data}</h2>
              {mappedRepos}
              
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Movie;
