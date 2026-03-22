import Image from 'next/image';

const services = [
  {
    icon: '/images/service/calendar.svg',
    title: 'მოითხოვეთ',
    description: 'სამედიცინო ინჟინერის ვიზიტი',
  },
  {
    icon: '/images/service/check-up.svg',
    title: 'შეამოწმეთ',
    description: 'სამედიცინო პროდუქცია',
  },
  {
    icon: '/images/service/engineer.svg',
    title: 'მიიღეთ',
    description: 'ღირსეული მომსახურება',
  },
];

export function TechnicalService() {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 top-0 h-[70%] bg-primary" />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 lg:pt-18">
          <div className="rounded-xl bg-white border border-primary-light/50 p-10 shadow-sm lg:p-14">
            <div className="grid gap-10 sm:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src={service.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="h-18 w-18"
                  />
                  <h3 className="mt-6 text-xl font-semibold text-foreground uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-md text-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
