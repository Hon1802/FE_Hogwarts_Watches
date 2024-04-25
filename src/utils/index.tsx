/* eslint-disable @typescript-eslint/no-unused-vars */
export const combineItemWithSize = (winsize: number) => {
  switch (true) {
    case winsize <= 1200:
      return 2
    case winsize <= 1350:
      return 3
    case winsize <= 1450:
      return 5
    case winsize <= 1900:
      return 6
    case winsize <= 2100:
      return 7
    default:
      return 8
  }
}
export const updateCountItemToDisplay = (
  countItem: number,
  setDisplayedItems: React.Dispatch<React.SetStateAction<number>>,
  updateState: (index: number, items: number) => void,
  setIsFirstItem: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLastItem: React.Dispatch<React.SetStateAction<boolean>>,
  setWidthItem: React.Dispatch<React.SetStateAction<string>>,
  setClicked: React.Dispatch<React.SetStateAction<boolean>>,
  displayedItems: number,
  clicked: boolean
) => {
  setDisplayedItems(countItem)
  updateState(0, displayedItems)
  setIsFirstItem(true)
  setIsLastItem(false)
  const newWidthItem = Math.round((window.innerWidth - (countItem - 1) * 5 - window.innerWidth * 0.15) / countItem)
  setWidthItem(newWidthItem.toString())
  setClicked(!clicked)
}
