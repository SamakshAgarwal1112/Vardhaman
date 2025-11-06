export default function About() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-cream-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-burgundy-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-burgundy-50 border border-burgundy-100 rounded-full mb-4">
            <span className="text-2xl">✨</span>
            <span className="text-sm text-burgundy-700 font-medium">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Vardhaman Carpet
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <span className="font-bold text-burgundy-700">Vardhaman Carpet</span>, we are dedicated to providing high-quality foam and furnishings 
              that combine luxury with practicality. Our products are crafted with attention to detail, 
              ensuring durability and comfort.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a commitment to customer satisfaction, we strive to create spaces that reflect 
              your unique style and enhance your everyday living experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex-1 min-w-[140px] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-burgundy-700 mb-2">30+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="flex-1 min-w-[140px] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-burgundy-700 mb-2">10K+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="flex-1 min-w-[140px] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-burgundy-700 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-burgundy-100 to-gold-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl mb-4 block">🏠</span>
                  <p className="text-burgundy-700 font-semibold text-lg">Crafting Comfort</p>
                  <p className="text-burgundy-600 text-sm">Since 1990</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-burgundy-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}