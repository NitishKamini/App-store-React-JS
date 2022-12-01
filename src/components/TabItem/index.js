import './index.css'

const TabItem = props => {
  const {tabDetails, getActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails
  console.log(isActive)
  const newClass = isActive ? 'class' : ''
  const findActiveTabId = () => {
    getActiveTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-name ${newClass}`}
        onClick={findActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
