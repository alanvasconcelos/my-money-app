import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../contentHeader/contentHeader'
import Content from '../content/content'
import ValueBox from '../valueBox/valueBox'
import { getSummary } from '../../store/actions/dashboardAction'

class dashboard extends Component {

  componentWillMount() {
    this.props.getSummary()
  }
  
  render() {
    const { credit, debit } = this.props.summary
    return (
      <div>
        <ContentHeader title='Dashboard' subtitle='Versão 1.0'/>
        <Content>
          <div class='row'>
            <div class='col-sm-4'>
              <ValueBox bg='bg-green' icon='fa fa-institution' label='Total de Créditos' value={`R$ ${credit}`} />
            </div>
            <div class='col-sm-4'>
              <ValueBox bg='bg-red' icon='fa fa-credit-card' label='Total de Débitos' value={`R$ ${debit}`} />
            </div>
            <div class='col-sm-4'>
              <ValueBox bg='bg-aqua' icon='fa fa-money' label='Valor Consolidado' value={`R$ ${credit - debit}`} />
            </div>
          </div>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  summary: state.dashboard.summary
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(dashboard)