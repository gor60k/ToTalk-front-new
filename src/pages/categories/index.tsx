import React from "react"
import PageHead from "../../shared/ui/PageHead/PageHead"
import ItemList from "../../shared/ui/ItemList/ItemList"

const categories = () => {
  return (
    <main className="page">
      <PageHead title="Категории" />
      <section className="page-section">
        <ItemList />
      </section>
    </main>
  )
}

export default categories