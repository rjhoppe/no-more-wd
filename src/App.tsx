import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const toggleOpen = () => {
    if (isOpen === true) {
      chrome.extension.getViews({type: 'popup'}).forEach(v => v.close());
      setIsOpen(false)
    }
    else {
      chrome.action.setPopup({popup: 'popup.html'})
      setIsOpen(true)
    }
  }

  return (
    <>
      <Card
        toggleOpen={() => toggleOpen()}
        title='No More WD'
      />
    </>
  )
}
export default App