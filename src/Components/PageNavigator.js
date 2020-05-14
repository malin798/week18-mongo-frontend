import React from 'react'


export const PageNavigator = ({page, setPage, maxPages }) => {
  return (

    <section className='page-navigator'>

      <button 
        className={page < 3 ? 'hidden': "" } 
        disabled={page < 3} 
        onClick={() => setPage(1)}> 
        &lt;&lt; 
      </button>

      <button 
        className={page < 2 ? 'hidden' : "" } 
        disabled={page < 2} 
        onClick={() => setPage(page -1)}> 
        &lt;
      </button>

      <p>Page {page} / {maxPages}</p>

      <button 
        className={page === maxPages  ? 'hidden' : "" } 
        disabled={page === maxPages} 
        onClick={() => setPage(page +1)}> 
        &gt;
      </button>

      <button 
        className={page === maxPages  ? 'hidden' : "" } 
        disabled={page === maxPages} 
        onClick={() => setPage(maxPages)}>
        &gt;&gt;
      </button>

    </section>

  )
}
