const benefits = [
  {
    id: 1,
    title: 'ჯანმრთელობა',
    items: [
      'ჯანმრთელობის დაზღვევა',
      'ჯანსაღი სამუშაო გარემო',
      'მეგობრული თანამშრომლები',
    ],
  },
  {
    id: 2,
    title: 'ჯანმრთელობა',
    items: [
      'ჯანმრთელობის დაზღვევა',
      'ჯანსაღი სამუშაო გარემო',
      'მეგობრული თანამშრომლები',
    ],
  },
  {
    id: 3,
    title: 'ჯანმრთელობა',
    items: [
      'ჯანმრთელობის დაზღვევა',
      'ჯანსაღი სამუშაო გარემო',
      'მეგობრული თანამშრომლები',
    ],
  },
];

export function Benefits() {
  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl leading-10">
            ბენეფიტები
          </h2>

          {/* Benefits Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.id}>
                <h3 className="text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {benefit.items.map((item, index) => (
                    <li key={index} className="text-foreground/80 text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
