// import Container from '@/components/Container'
import RulesSections from '@/components/RulesSections'
import sectionsData from '@/data/RulesPage/rulesData'
import React from 'react'

const RulesPage = () => {
  return (
    <div>
      {/* <Container /> */}
      <RulesSections sections={sectionsData.sections}/>
    </div>
  )
}

export default RulesPage