// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { setupCounter } from './counter.js'

describe('setupCounter', () => {
  let element

  beforeEach(() => {
    element = document.createElement('button')
    document.body.appendChild(element)
  })

  it('initializes the counter to 0', () => {
    setupCounter(element)
    expect(element.innerHTML).toBe('Count is 0')
  })

  it('increments the counter on click', () => {
    setupCounter(element)
    element.click()
    expect(element.innerHTML).toBe('Count is 1')
  })

  it('increments multiple times', () => {
    setupCounter(element)
    element.click()
    element.click()
    element.click()
    expect(element.innerHTML).toBe('Count is 3')
  })
})