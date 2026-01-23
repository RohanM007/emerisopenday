const Disclaimer = () => {
  return (
    <section className="py-8 bg-amber-50 border-y-2 border-amber-200 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-l-4 border-amber-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Important Notice</h3>
                <div className="space-y-2 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    This website was created specifically for <strong>Emeris Pietermaritzburg Open Day 2026</strong> and is <strong>not the official Emeris website</strong>.
                  </p>
                  <p>
                    All information regarding degree programs, modules, and fees has been sourced from the official Emeris website and documentation.
                  </p>
                  <p className="text-amber-800 font-semibold">
                    ⚠️ This website will be closed after the Open Day event. Please download all brochures and information you need as soon as possible before it is shut down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;

