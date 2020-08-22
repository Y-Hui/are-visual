import React, { useState, useMemo, useEffect } from 'react'
import Checkbox from './index'

type CheckState = 'checked' | 'unchecked' | 'mixin'

export default () => {
  const [fruit, setFruit] = useState([
    {
      value: 'apple',
      label: 'Apple',
    },
    {
      value: 'banana',
      label: 'Banana',
    },
    {
      value: 'grape',
      label: 'Grape',
    },
  ])
  const allCheckValue = useMemo(() => fruit.map((item) => item.value), [fruit])

  const [checkedVal, setCheckedVal] = useState(['apple'])

  const [state, setState] = useState<CheckState>('mixin')
  useEffect(() => {
    const checkAll = allCheckValue.every((item) => checkedVal.includes(item))

    if (checkAll) {
      setState('checked')
    } else {
      setState(checkedVal.length === 0 ? 'unchecked' : 'mixin')
    }
  }, [checkedVal, allCheckValue])

  const onChange = (v: string[]) => {
    setCheckedVal(v)
  }

  const onCheckAllChange = () => {
    setCheckedVal(state === 'checked' ? [] : allCheckValue)
  }

  return (
    <>
      <p>{JSON.stringify(checkedVal)}</p>
      <Checkbox
        checked={state === 'checked'}
        mixin={state === 'mixin'}
        onChange={onCheckAllChange}
      >
        Check All
      </Checkbox>
      <Checkbox.Group value={checkedVal} onChange={onChange}>
        {fruit.map((item) => (
          <Checkbox key={item.value} name={item.value}>
            {item.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
      <br />
      <Button
        onClick={() => {
          setCheckedVal(['apple'])
        }}
      >
        Only Check Apple.
      </Button>
      <Button
        onClick={() => {
          setFruit([
            {
              value: 'apple',
              label: 'Apple',
            },
            {
              value: 'banana',
              label: 'Banana',
            },
          ])
        }}
      >
        Change DOM
      </Button>
    </>
  )
}
