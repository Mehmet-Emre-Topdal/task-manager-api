Bu dosya, Mangolab.ai mini case çalışması sürecinde yapay zeka araçlarının hangi aşamalarda ve hangi komutlarla kullanıldığını belgelemek amacıyla hazırlanmıştır.

---

# AI Usage Log

Bu proje geliştirilirken, kod iskeletinin oluşturulması ve dokümantasyon süreçlerinde (Antigravity) desteğinden faydalanılmıştır. Aşağıda süreç boyunca kullanılan temel promptlar ve izlenen yol haritası yer almaktadır.

## 1. Planlama ve Mimari Kararlar

Sürecin başında, taskın gereksinimleri analiz edilerek en uygun klasör yapısı ve best practice'ler üzerine danışıldı.

**Kullanılan Prompt:**

> Başvurmuş olduğum bir iş ilanından şöyle bir mail geldi:
> "[Mail İçeriği]"
> Opsiyonel olan maddelerin şimdilik ikinci aşama olduğunu düşünelim ve geliştirme kısmına odaklanalım. Tecrübeme göre bu task çok basic bir task o yüzden bunu yapay zekaya yaptırabileceğimi düşünüyorum. Seninle uygulamadan önce prompt üzerinde çalışacağız. Seninle şuan yapay zekaya vereceğimiz komutu oluşturacağız. Bu taskta dikkat etmem gereken best practice'ler nelerdir?

---

## 2. Core API Geliştirme (Master Prompt)

Projenin temel iskeleti, katmanlı mimari (Layered Architecture) ve modern JavaScript standartları gözetilerek tek bir ana komutla oluşturuldu.

**Kullanılan Prompt:**

> Node.js (Express) ve modern JavaScript (ES Modules - import/export) kullanarak bir 'Task Management API' geliştirmeni istiyorum. Kodun profesyonel, temiz (clean code) ve katmanlı mimariye (Controller-Service) uygun olmalı.
> **Teknik Detaylar ve Kurallar:**
> * **Endpointler:** POST /tasks (title, completed, createdAt) ve GET /tasks endpoint'leri eksiksiz çalışmalı.
> * **Mimari:** Kodlar src/ klasörü altında; controllers, services, routes, middlewares ve utils şeklinde modüler olarak ayrılmalı.
> * **Validasyon:** İstek gövdesini (request body) doğrulamak için Yup kütüphanesi kullanılmalı ve bu işlem bir middleware üzerinden yapılmalı.
> * **Hata Yönetimi:** Merkezi bir 'error handling middleware' kurulmalı. Hatalar standart bir formatta (örn: { success: false, message: "..." }) dönmeli.
> * **Veri Saklama:** Veriler in-memory bir array üzerinde tutulmalı ancak servis katmanı yarın bir veritabanı gelecekmiş gibi soyutlanmalı.
> * **YASAK:** Kod içerisinde kesinlikle yorum satırı (comment line) bulunmamalıdır. Kodun ne yaptığı, değişken ve fonksiyon isimlendirmelerinden net bir şekilde anlaşılmalıdır.
> * **Başlangıç:** Projenin giriş noktası app.js veya server.js olmalı.
> 
> 
> Bana önce dosya yapısını göster, ardından her bir dosyanın içeriğini sırasıyla, eksiksiz ve çalışmaya hazır şekilde ver.

---

## 3. Dokümantasyon ve Rafine Etme

API'nin test edilebilirliğini artırmak için Swagger (OpenAPI) entegrasyonu yapıldı ve gereksiz endpointler temizlendi.

**Kullanılan Promptlar:**

* "Projeye swagger ekleyelim, başka eksik bir şey kalmış olabilir mi?"
* "POST /tasks ve GET /tasks hariç endpointleri sil."

---

## 4. Güvenlik ve Kalite Kontrol

Uygulamanın güvenliğini sağlamak amacıyla `helmet` ve `rate-limiter` gibi araçların kullanımı üzerine çalışıldı.

**Kullanılan Promptlar:**

* "helmet ne işe yarıyor?"
* "strict limiter'ın api limiterdan ne farkı var?"

---

## 5. Test Süreci

Kod kalitesini ve iş mantığını doğrulamak adına Jest ve Supertest kullanılarak test kapsamı genişletildi.

**Kullanılan Prompt:**

> "Unit testleri ekleyelim, %100 coverage amaçlıyoruz."

---

## 6. Dockerize Etme ve Dağıtım

Projenin her ortamda sorunsuz çalışması için Docker yapılandırması eklendi.

**Kullanılan Promptlar:**

* "Dockerfile'ı ekleyelim."
* "docker imajı oluşturup run edelim."

---

