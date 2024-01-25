const React = require('react')
const Default = require('./layouts/default')

function New () {
    return (
      <Default>
        <div className="backButton">
            <a href="/breads"><button>Go back to the index</button></a>
        </div>

        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
          <label htmlFor="name">Name</label>
          <input className="form-control"
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input className="form-control"
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input className="form-control"
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <input className="btn btn-primary" type="submit"/>
        </form>
      </Default>
    )
}

module.exports = New
