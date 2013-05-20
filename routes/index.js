
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Michael and Abby\'s Wedding Site' });
};
