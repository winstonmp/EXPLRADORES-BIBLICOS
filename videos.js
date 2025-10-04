// Videos Data
const videosData = [
  {
    id: 1,
    title: "El Arca de Noé",
    category: "antiguo",
    duration: "8:45",
    age: "4+",
    thumbnail: "noah-ark-video-thumbnail-children-animation.jpg",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "David y Goliat",
    category: "antiguo",
    duration: "7:30",
    age: "5+",
    thumbnail: "david-goliath-video-thumbnail-children-animation.jpg",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Jonás y la Ballena",
    category: "antiguo",
    duration: "6:15",
    age: "4+",
    thumbnail: "jonah-whale-video-thumbnail-children-animation.jpg",
    videoUrl: "#",
  },
  {
    id: 4,
    title: "Daniel en el Foso de los Leones",
    category: "antiguo",
    duration: "9:00",
    age: "5+",
    thumbnail: "daniel-lions-video-thumbnail-children-animation.jpg",
    videoUrl: "#",
  },
  {
    id: 5,
    title: "El Nacimiento de Jesús",
    category: "nuevo",
    duration: "10:30",
    age: "3+",
    thumbnail: "nativity-video-thumbnail-children-animation.jpg",
    videoUrl: "#",
  },
  {
    id: 6,
    title: "Moisés y el Mar Rojo",
    category: "antiguo",
    duration: "8:00",
    age: "5+",
    thumbnail: "moses-red-sea-video-thumbnail-children-animation.jpg",
    videoUrl: "#",
  },
]

// Render Videos
function renderVideos(filter = "todos") {
  const grid = document.getElementById("videos-grid")
  if (!grid) return

  const filteredVideos = filter === "todos" ? videosData : videosData.filter((v) => v.category === filter)

  grid.innerHTML = filteredVideos
    .map(
      (video) => `
    <div class="video-card" data-video-id="${video.id}">
      <div class="relative aspect-video overflow-hidden">
        <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl">
            <span class="text-3xl">▶️</span>
          </div>
        </div>
        <span class="video-badge">${video.duration}</span>
        <span class="age-badge">${video.age}</span>
      </div>
      <div class="p-6">
        <h3 class="text-2xl font-bold text-purple-600 mb-2">${video.title}</h3>
        <button class="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
          Ver Video
        </button>
      </div>
    </div>
  `,
    )
    .join("")

  // Add click handlers
  document.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", function () {
      const videoId = this.dataset.videoId
      openVideoModal(videoId)
    })
  })
}

// Filter Buttons
document.addEventListener("DOMContentLoaded", () => {
  renderVideos()

  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"))
      this.classList.add("active")
      const category = this.dataset.category
      renderVideos(category)
    })
  })

  // Modal handlers
  const modal = document.getElementById("video-modal")
  const closeBtn = document.getElementById("close-modal")

  if (closeBtn) {
    closeBtn.addEventListener("click", closeVideoModal)
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeVideoModal()
      }
    })
  }
})

function openVideoModal(videoId) {
  const video = videosData.find((v) => v.id == videoId)
  if (!video) return

  const modal = document.getElementById("video-modal")
  const title = document.getElementById("modal-title")
  const container = document.getElementById("video-container")

  if (modal && title && container) {
    title.textContent = video.title
    container.innerHTML = `
      <div class="text-center p-8">
        <p class="text-xl mb-4">Video: ${video.title}</p>
        <p class="text-gray-400">En un sitio real, aquí se mostraría el video embebido</p>
      </div>
    `
    modal.classList.remove("hidden")
    modal.classList.add("flex")
  }
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal")
  if (modal) {
    modal.classList.add("hidden")
    modal.classList.remove("flex")
  }
}
