import React, { useEffect, Fragment } from 'react';

export default (props) => {
  useEffect(() => {
    const dataTable = new window.mdc.dataTable.MDCDataTable(document.querySelector('.mdc-data-table'));
  })
  return (
    <section className="component-section">
    <div className="section-header">
      <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table" className="mdc-button" target="_blank">
        <span className="mdc-button__label">Data table</span>
        <i className="material-icons mdc-button__icon" aria-hidden="true">open_in_new</i>
      </a>
    </div>
    <hr className="mdc-list-divider" />
    <div className="helper-flex-display helper-flex-row helper-flex-space-between" style={{minHeight: 100}}>

    <div className="mdc-data-table helper-full-width">
  <div className="mdc-data-table__table-container">
    <table className="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr className="mdc-data-table__header-row">
          <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Character</th>
          <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Strengths</th>
          <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Weaknesses</th>
          
        </tr>
      </thead>
      <tbody className="mdc-data-table__content">
        <tr className="mdc-data-table__row">
          <th className="mdc-data-table__cell" scope="row">Batman</th>
          <td className="mdc-data-table__cell">Strong muscles</td>
          <td className="mdc-data-table__cell">Never laughs</td>
          
        </tr>
        <tr className="mdc-data-table__row">
          <th className="mdc-data-table__cell" scope="row">Joker</th>
          <td className="mdc-data-table__cell">Laughter</td>
          <td className="mdc-data-table__cell">No muscles</td>
          
        </tr>
        <tr className="mdc-data-table__row">
          <th className="mdc-data-table__cell" scope="row">Pinguid</th>
          <td className="mdc-data-table__cell">Hidden in the underground</td>
          <td className="mdc-data-table__cell">Cannot fly</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  </section>
  )
}
