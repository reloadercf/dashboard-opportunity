import React, {Component} from 'react'
import { Layout} from 'antd'
import DetailCard from './DetailCard';
import Nav from '../homepage/nav/Nav';
import Footer from '../homepage/footer/Footer';
import Header from '../homepage/header/Header';
import { connect } from 'react-redux';
import { actionGetArticuloSlug, actionGetArticuloDetail } from '../../../Store/Acciones';


const {
    Content,
  } = Layout;


class Detail extends Component {
    componentDidMount(){
        this.props.getSlug(this.props.match.params.slug_noticia);
        this.props.getArticulo();
    }

    render() {
        console.log(this.props)
        return (
            <Layout >
                <Header />
                <Nav/>
                <Content >
                   
                    <DetailCard  {...this.props} detail={this.props.detail.articulo ?this.props.detail.articulo:null}/>
                </Content>
                <Footer />
            </Layout>     
     
        );
    }
}
const mapStateToProps = (state) => ({
    detail: state.reducerArticulos,
  })
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getSlug: (slug) => {
            dispatch(actionGetArticuloSlug(slug));
          },
        getArticulo: () => {
            dispatch(actionGetArticuloDetail());
          },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Detail)
  
  