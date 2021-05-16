process.env.NODE_ENV = 'test'
import {app} from "../app.js"
import chai from 'chai'
import chaiHttp from 'chai-http'
import {describe,it} from 'mocha'
const should = chai.should()

chai.use(chaiHttp)

/*simple test to make sure endpoint returns the correct object*/
/*{
    languages_count: number,
    lanugages_list : [languages],
    languages_details :{
        language_1:{name: name, repos_number: no of repos in the top 100 using this language, repos_array: [list of repos]}
    }
}
*/

describe('/GET app', () => {
    it('it should GET github repos object correctly', function(done) {
      this.timeout(5000)
      chai.request(app)
          .get('/github-repos')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object')
                res.body.should.have.property('languages_count')
                res.body.should.have.property('languages_list')
                res.body.should.have.property('languages_details')
                res.body.languages_details.should.be.a('object')
                res.body.languages_list.should.be.a('array')
            done();
          });
    });
});
