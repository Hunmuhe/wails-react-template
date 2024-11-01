import React from 'react';
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { GoodsCard } from "@/components/custom/goods-card";
import { goodsCardType } from "@/types/goodscard"
import { ScrollArea } from "@/components/ui/scroll-area"


const About: React.FC = () => {
    const [iframesrc, setIframesrc] = React.useState('');

    const [goodscards, setGoodscards] = React.useState<goodsCardType[]>([
        {
            id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
            name: "绿带翠凤蝶真蝴蝶标本成品展示框礼物摆件挂画装饰画罕见生日礼物",
            text: "Hi, let's have a meeting tomorrow to discuss the project...",
            labels: "淘宝",
            url: "https://item.taobao.com/item.htm?id=707158969269",
            selected: false,
        },
        {
            id: "110e8400-e29b-11d4-a716-446655440000",
            name: "新款加厚大容量被子收纳袋家用衣柜衣物收纳箱防尘防潮搬家打包袋",
            text: "Thank you for the project update...",
            labels: "1688",
            url: "https://detail.1688.com/offer/743284791683.html",
            selected: false,
        },
    ]);

    const setSelected = (goodsid: string) => {
        setGoodscards((prevCards) =>
            prevCards.map((card) =>
                card.id === goodsid ? { ...card, selected: !card.selected } : { ...card, selected: false }
            )
        );
    };

    return (
        <>
            <div>
                <div className="flex h-[52px] items-center pl-5">
                    <h1 className="text-xl font-bold">选品</h1>
                </div>
                <Separator />
                <div className='flex' style={{ height: "calc(100vh - 53px)" }}>
                    <div className='w-1/2'>
                        <div>
                            <ScrollArea style={{ height: "calc(100vh - 53px)" }}>
                                <div className="flex flex-col gap-2 p-4 pt-0">
                                    {goodscards.map((item) => (
                                        <div onClick={() => { setIframesrc(item.url); setSelected(item.id) }}>
                                            <GoodsCard goodscard={item} />
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </div>
                    </div>
                    <Separator orientation="vertical" />
                    <div className='h-full w-full overflow-hidden' >
                        <iframe
                            src={iframesrc}
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            title="External Site"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;