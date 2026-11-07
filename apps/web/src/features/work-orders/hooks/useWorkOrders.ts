import { useState, useEffect } from 'react'
import { WorkOrder } from '../types/work-order.types'
import { workOrderApi } from '../services/workOrderApi'

export function useWorkOrders() {
  const [data, setData] = useState<WorkOrder[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    workOrderApi.getWorkOrders().then((res) => {
      setData(res)
      setLoading(false)
    })
  }, [])

  return { data, loading }
}
