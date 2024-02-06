export async function getMyData() {
  try {
    const response = await fetch('/me.json')
    return await response.json()
  } catch (e) {
    console.error(e)
  }
}