import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { CAKE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const cakePriceUsd = priceData ? parseFloat(priceData.data[CAKE.address]?.price ?? 0) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `Black Swan Swap${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
