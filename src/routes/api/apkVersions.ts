/**
 * It fetches a list of apk files from a server and returns the list.
 * @returns An object with a body property that is an object with a data property
 * that is an array of objects.
 */
export const get = async () => {
  const url = `http://localhost:8080/get_apk_list`
  const res = await fetch(url)
  const data = await res.json()

  return {
    body: {
      data: data
    }
  }
}