function url (keys , hbs) {
    app.get(keys , (req, res) => {
        res.render(hbs)
      })
}
module.exports = url();