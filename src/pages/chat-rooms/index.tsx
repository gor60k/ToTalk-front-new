import React from 'react'
import PageHead from '../../shared/ui/PageHead/PageHead'
import ItemList from '../../shared/ui/ItemList/ItemList'

const chatRooms = () => {
  return (
    <main className="page">
      <PageHead title="ChatRooms" />
      <section className="page-section">
        <ItemList />
      </section>
    </main>
  )
}

export default chatRooms