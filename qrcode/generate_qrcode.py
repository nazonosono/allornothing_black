import qrcode

hiragana = [
    "あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も", "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"
]

# QRコードを生成して保存する関数
def generate_qr_codes():
    for x in range(len(hiragana)):
        # QRコードの生成
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(str(x))
        qr.make(fit=True)

        # 画像生成
        img = qr.make_image(fill="black", back_color="white")

        # 画像の保存
        filename = f"{x:02d}_{hiragana[x]}.png"
        img.save(f"img/{filename}")

# QRコード生成関数を実行
generate_qr_codes()
