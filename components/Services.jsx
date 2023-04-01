import style from "../styles/Services.module.css";
import Image from "next/image";
import Link from "next/link";

const Services = ({ services }) => {
  if (!services || services.length === 0) {
    return <div>No services available.</div>;
  }
  return (
    <div className={style.container}>
      <div className={style.info}>
        <h1 className={style.title}>What We Can Do?</h1>
        <h1 className={style.subtitle}>Services we can help you with</h1>
        <div className={style.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>
              <div className={style.service}>
                <div className={style.catInfo}>{service.desc}</div>
                <span className={style.cat}>{service.title}</span>
                <div className={style.media}>
                  {service.video ? (
                    <video
                      className={style.video}
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      src={`/img/${service.photo}`}
                      //   width="100%"
                      //   height="100%"
                      width={200}
                      height={200}
                      layout="responsive"
                      objectFit="cover"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
