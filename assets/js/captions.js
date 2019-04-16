/* global XMLHttpRequest, WebVTT */

(() => {
  const video = document.querySelector('video')
  const caption = video.querySelector('track[kind=subtitles]')

  const captionsDisplay = document.querySelector('.captions-display')

  let cues = []
  let regions = []

  const xhr = new XMLHttpRequest()
  xhr.open('GET', caption.src)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      doCaptions(xhr.responseText, cues, regions)
    }
  }
  xhr.send()

  video.addEventListener('timeupdate', () => {
    var ct = video.currentTime

    var activeCues = cues.filter(function (cue) {
      return cue.startTime <= ct && cue.endTime >= ct
    })

    WebVTT.processCues(window, activeCues, captionsDisplay)
  })
})()

function doCaptions (caption, cues, regions) {
  const parser = new WebVTT.Parser(window, WebVTT.StringDecoder())

  parser.oncue = cue => {
    cues.push(cue)
  }
  parser.onregion = region => {
    regions.push(region)
  }
  parser.onparsingerror = err => {
    console.log(err)
  }

  parser.parse(caption)
  parser.flush()
}
